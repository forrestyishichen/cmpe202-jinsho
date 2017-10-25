jsApp.PlayScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        // 讀取關卡

        me.levelDirector.loadLevel("level01");
    },

    onDestroyEvent: function() {
    }
});