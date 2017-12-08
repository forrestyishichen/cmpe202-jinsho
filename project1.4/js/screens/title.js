game.TitleScreen = me.ScreenObject.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent : function() {

        // play the audio track
        // me.audio.playTrack("DST-XYAura");

        // title screen
        var backgroundImage = new me.Sprite(0, 0, {
               image: me.loader.getImage('bg_shroom'),
            }
        );

        // position and scale to fit with the viewport size
        backgroundImage.anchorPoint.set(0, 0);
        backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
        // add to the world container
        me.game.world.addChild(backgroundImage, 1);


        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function() {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);

                // font for the scrolling text
                this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));

                 // a tween to animate the arrow
                this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();

                this.scroller = "CMPE202 JinSho";
                this.scrollerpos = 600;
            },

            // some callback for the tween objects
            scrollover : function() {
                // reset to default value
                this.scrollerpos = 640;
                this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
            },

            update : function (dt) {
                return true;
            },

            draw : function (renderer) {
                this.font.textAlign = "center";
                this.font.draw(renderer, "PRESS ENTER TO PLAY", me.game.viewport.width / 2, 350);
                this.font.textAlign = "left";
                this.font.draw(renderer, this.scroller, this.scrollerpos, 440);
            },
            onDestroyEvent : function() {
                //just in case
                this.scrollertween.stop();
            }
        })), 2);

        // change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.audio.play("cling");
                me.state.change(me.state.PLAY);
            }
        });
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindPointer(me.input.pointer.LEFT);
        me.event.unsubscribe(this.handler);
   },
   
   /**
    * Animation!
    */
   addBackground: function (atlas0) {
    var bg = atlas0.createSpriteFromName("bg.png");
    me.game.world.addChild(bg, 1);
    var clouds = atlas0.createSpriteFromName("clouds.png");
    this.centerOnX(clouds);
    clouds.pos.y = - 100;
    this.tweenForSprite(clouds.pos, { y: 0}, 1500);
    me.game.world.addChild(clouds, 2);
  },

  addBackCities: function (atlas1) {
    var backback = atlas1.createSpriteFromName("backbackcity.png");
    var startBackPos = 650 - backback.height;
    backback.pos.y = startBackPos
    this.tweenForSprite(backback.pos, { y: 200 }, 1350);
    me.game.world.addChild(backback, 3);

    var backcity = atlas1.createSpriteFromName("backcity.png");
    backcity.pos.y = startBackPos + 150;
    this.tweenForSprite(backcity.pos, { y: 290 }, 1400);
    me.game.world.addChild(backcity, 4);
  },

  addForeGround: function (atlas1) {
    var foreGround = atlas1.createSpriteFromName("foreground.png");
    foreGround.pos.y = me.game.viewport.height - 50;
    this.tweenForSprite(foreGround.pos, { y: me.game.viewport.height - foreGround.height }, 1500, (function () {
      this.addTitle(atlas1);
    }).bind(this));
    me.game.world.addChild(foreGround, 8);
  },

  addFrontCity: function (atlas0) {
    var city = atlas0.createSpriteFromName("forwardcity.png");
    city.pos.y = 200;
    this.tweenForSprite(city.pos, { y: 0 }, 1500);
    me.game.world.addChild(city, 5);
  },

  addTitle: function (atlas1) {
    var blackBg = atlas1.createSpriteFromName("black.png");
    blackBg.scale(1, 0.01);
    blackBg.pos.y = me.game.viewport.height / 2 - blackBg.height / 2;
    me.game.world.addChild(blackBg, 9);
    this.tweenForSprite({y: 0.01}, { y: 1.0}, 500, (function () {
      var title = atlas1.createSpriteFromName("text.png");
      title.alpha = 0.0;
      title.pos.y = me.game.viewport.height / 2 - title.height / 2;
      me.game.world.addChild(title, 10);
      this.tweenForSprite(title, { alpha: 1.0 }, 500);
      me.input.registerPointerEvent("pointerdown", me.game.viewport, this.startPlay);
    }).bind(this)).onUpdate(function () {
      blackBg.scale(1, this.y);
    }).start();
  },

  addVignette: function (atlas0) {
    var filter = atlas0.createSpriteFromName("vignette.png");
    me.game.world.addChild(filter, 7);
  },

  centerOnX: function (sprite) {
    sprite.pos.x = ((me.game.viewport.width - sprite.width) / 2) * -1;
  },

  startPlay: function () {
    me.input.releasePointerEvent("pointerdown", me.game.viewport, this.startPlay);
    me.game.viewport.fadeIn('#000000', 500, function () {
      me.state.change(me.state.PLAY);
    });
  },

  tweenForSprite: function (object, targetObject, duration, callback) {
    var tween = me.pool.pull("me.Tween", object).to(targetObject, duration * 2.5).easing(me.Tween.Easing.Sinusoidal.Out).start();
    if (callback) {
      tween.onComplete(callback);
    }

    return tween;
  }
});
