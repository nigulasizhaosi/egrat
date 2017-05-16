class changeXY extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        var offsetX:number;
        var offsetY : number;
         var draggedObject:egret.Shape;

        var mySprite: egret.Sprite = new egret.Sprite();
        mySprite.x = 200;
        mySprite.y = 200;
        this.addChild(mySprite);

        var myCirle : egret.Shape = new egret.Shape();
        myCirle.graphics.beginFill(0xff0000);
        myCirle.graphics.drawCircle(25,25,25);
        myCirle.graphics.endFill();
        mySprite.addChild(myCirle);
        myCirle.touchEnabled = true;
      
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
      
        /*
        myCirle.addEventListener(egret.TouchEvent.TOUCH_TAP,onClick,this);
        function onClick():void{
            var targetPoint: egret.Point = mySprite.globalToLocal(0,0);  //转换原点坐标
            console.log('click');
            //重新定位圆，可以看到圆形移到了屏幕的左上角
            myCirle.x = targetPoint.x;
            myCirle.y = targetPoint.y;
        }
        */
        function stopMove(e:egret.TouchEvent) {                
                    //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
        }
        function startMove(e:egret.TouchEvent):void{
            //把手指按到的对象记录下来
            draggedObject = e.currentTarget;
            //计算手指和要拖动的对象的距离
            offsetX = e.stageX - draggedObject.x;
            offsetY = e.stageY - draggedObject.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
            }
                
        function onMove(e:egret.TouchEvent):void{
        //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            draggedObject.x = e.stageX - offsetX;
            draggedObject.y = e.stageY - offsetY;
        }
    }
}
    
