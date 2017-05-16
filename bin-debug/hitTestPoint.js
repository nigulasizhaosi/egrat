var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var hitTest = (function (_super) {
    __extends(hitTest, _super);
    function hitTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    hitTest.prototype.onAddToStage = function (event) {
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xe2d7d7);
        shp.graphics.drawCircle(50, 50, 50);
        shp.graphics.endFill();
        this.addChild(shp);
        var onoff = shp.hitTestPoint(0, 0, true); //碰撞检测，true为精确检测
        this.infoText.text = "碰撞结果" + onoff;
    };
    hitTest.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = '碰撞结果：';
        this.addChild(this.infoText);
    };
    return hitTest;
}(egret.DisplayObjectContainer));
__reflect(hitTest.prototype, "hitTest");
//# sourceMappingURL=hitTestPoint.js.map