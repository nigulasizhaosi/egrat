class hitTest extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xe2d7d7);
        shp.graphics.drawCircle(50,50,50);
        shp.graphics.endFill();
        this.addChild(shp);

        var onoff = shp.hitTestPoint(0,0,true);  //碰撞检测，true为精确检测
        this.infoText.text = "碰撞结果" + onoff;
    }
    private infoText:egret.TextField;
    private drawText(){
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = '碰撞结果：';
        this.addChild( this.infoText );
    }
}