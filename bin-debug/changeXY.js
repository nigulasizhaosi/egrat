var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var changeXY = (function (_super) {
    __extends(changeXY, _super);
    function changeXY() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    changeXY.prototype.onAddToStage = function (event) {
        var offsetX;
        var offsetY;
        var draggedObject;
        var mySprite = new egret.Sprite();
        mySprite.x = 200;
        mySprite.y = 200;
        this.addChild(mySprite);
        var myCirle = new egret.Shape();
        myCirle.graphics.beginFill(0xff0000);
        myCirle.graphics.drawCircle(25, 25, 25);
        myCirle.graphics.endFill();
        mySprite.addChild(myCirle);
        myCirle.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
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
        function stopMove(e) {
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function startMove(e) {
            //把手指按到的对象记录下来
            draggedObject = e.currentTarget;
            //计算手指和要拖动的对象的距离
            offsetX = e.stageX - draggedObject.x;
            offsetY = e.stageY - draggedObject.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            draggedObject.x = e.stageX - offsetX;
            draggedObject.y = e.stageY - offsetY;
        }
    };
    return changeXY;
}(egret.DisplayObjectContainer));
__reflect(changeXY.prototype, "changeXY");
//# sourceMappingURL=changeXY.js.map