class scrollBtn extends egret.DisplayObjectContainer{
     //长文字的滚动 
       public constructor(){
        super();
        this.scrollFun();
        }
    public scrollFun(){
        var bigTextss:egret.TextField = new egret.TextField();
        bigTextss.text = " 这是一段很长很长很长很长很长很长很长很长很长很长很长很长的话";
        bigTextss.scrollRect = new egret.Rectangle(0,0,200,50);
        bigTextss.cacheAsBitmap = true; 
        this.addChild(bigTextss);

        var btnl : egret.Shape = new egret.Shape();
        btnl.graphics.beginFill(0xcccc01);
        btnl.graphics.drawRect(0,0,50,50);
        btnl.graphics.endFill();
        btnl.x = 50;
        btnl.y = 100;
        this.addChild(btnl);
        btnl.touchEnabled = true;
        btnl.addEventListener(egret.TouchEvent.TOUCH_TAP,onscroll,this);

        var btnr : egret.Shape = new egret.Shape();
        btnr.graphics.beginFill(0xcccc01);
        btnr.graphics.drawRect(0,0,50,50);
        btnr.graphics.endFill();
        btnr.x = 150;
        btnr.y = 100;
        this.addChild(btnr);
        btnr.touchEnabled = true;
        btnr.addEventListener(egret.TouchEvent.TOUCH_TAP,onscroll,this);

        function onscroll(e:egret.Event){
            var rect :egret.Rectangle = bigTextss.scrollRect;
            switch( e.currentTarget ){
                case btnl:
                    rect.x += 20;
                        break;
                case btnr:
                    rect.x -=20;
                        break;
            }
            bigTextss.scrollRect = rect;
        }
    }
}