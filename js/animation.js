var app = new PIXI.Application({ antialias: true });

const factory = dragonBones.PixiFactory.factory;

/*
    Экземпляр анимаци
*/
function BaseInit()
{
    return {
        pname : "void", // ...
        panim : "void", // имя анимации
        arname : "void", // Имя арматуры
        dgname : "void", // имя анимации
        x : 0, // позиция по оси x
        y : 0, // позиция по оси y
        sk_data : null, // путь к скелету
        tj_data : null, // путь к атласу
        tp_data : null, // путь к текстурам
        armatureDisplay : null, // сама арматура
    }
}

function RenderAuto()
{
    app.view.width = 640;
    app.view.height = 480;
}

/*
    Загружает ресурсы для анимации

    Params:
        _this = Экземпляр анимации (Base)
        skelet = путь до скелета
        texjs = путь до конфига текстуры
        texpng = путь до текстуры

    Returns:
        если на экземпляр послан null, возвращает новый экземпляр
*/
function Base_load(_this,skelet,texjs,texpng)
{
    if(_this == null)
        _this = Base;

    _this.sk_data = skelet;
    _this.tj_data = texjs;
    _this.tp_data = texpng;

    return _this;
}


/*
    Запускает анимацию

    Params:
        _this = данные
        anim = название анимации
        ar_name = armature name
        dg_name = dragonbone name
*/
function Base_play(_this,anim,ar_name,dg_name)
{
    _this.arname = ar_name;
    _this.dgname = dg_name;
    _this.panim = anim;

    PIXI.Loader.shared
        .add("sk",_this.sk_data)
        .add("tj",_this.tj_data)
        .add("tp",_this.tp_data)
        .load(function(loader,res) 
        {
            factory.parseDragonBonesData(res.sk.data);
            factory.parseTextureAtlasData(res.tj.data, res.tp.texture);
            const armatureDisplay = factory.buildArmatureDisplay(_this.arname,_this.dgname);
            armatureDisplay.animation.play(_this.panim);
            armatureDisplay.x = _this.x;
            armatureDisplay.y = _this.y;
            _this.armatureDisplay = armatureDisplay;
            app.stage.addChild(armatureDisplay);
            app.start();
        });
}

function Base_AutoPlay(_this)
{
    PIXI.Loader.shared
        .add("sk",_this.sk_data)
        .add("tj",_this.tj_data)
        .add("tp",_this.tp_data)
        .load(function(loader,res) 
        {
            factory.parseDragonBonesData(res.sk.data);
            factory.parseTextureAtlasData(res.tj.data, res.tp.texture);
            const armatureDisplay = factory.buildArmatureDisplay(_this.arname,_this.dgname);
            armatureDisplay.animation.play(_this.panim);
            armatureDisplay.x = _this.x;
            armatureDisplay.y = _this.y;
            _this.armatureDisplay = armatureDisplay;
            app.stage.addChild(armatureDisplay);
            app.start();
        });
}

