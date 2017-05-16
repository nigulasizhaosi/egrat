var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scrollBtn = (function (_super) {
    __extends(scrollBtn, _super);
    function scrollBtn() {
        var _this = _super.call(this) || this;
        _this.scrollFun();
        return _this;
    }
    scrollBtn.prototype.scrollFun = function () {
        var bigTextss = new egret.TextField();
        bigTextss.text = " 这是一段很长很长很长很长很长很长很长很长很长很长很长很长的话";
        bigTextss.scrollRect = new egret.Rectangle(0, 0, 200, 50);
        bigTextss.cacheAsBitmap = true;
        this.addChild(bigTextss);
        var btnl = new egret.Shape();
        btnl.graphics.beginFill(0xcccc01);
        btnl.graphics.drawRect(0, 0, 50, 50);
        btnl.graphics.endFill();
        btnl.x = 50;
        btnl.y = 100;
        this.addChild(btnl);
        btnl.touchEnabled = true;
        btnl.addEventListener(egret.TouchEvent.TOUCH_TAP, onscroll, this);
        var btnr = new egret.Shape();
        btnr.graphics.beginFill(0xcccc01);
        btnr.graphics.drawRect(0, 0, 50, 50);
        btnr.graphics.endFill();
        btnr.x = 150;
        btnr.y = 100;
        this.addChild(btnr);
        btnr.touchEnabled = true;
        btnr.addEventListener(egret.TouchEvent.TOUCH_TAP, onscroll, this);
        function onscroll(e) {
            var rect = bigTextss.scrollRect;
            switch (e.currentTarget) {
                case btnl:
                    rect.x += 20;
                    break;
                case btnr:
                    rect.x -= 20;
                    break;
            }
            bigTextss.scrollRect = rect;
        }
    };
    return scrollBtn;
}(egret.DisplayObjectContainer));
__reflect(scrollBtn.prototype, "scrollBtn");
//# sourceMappingURL=scroll.js.map