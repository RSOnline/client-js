/*
  JSON:
  {
    "location" : {
      name,
      sublocation
    },
    name,
    animation_data = JSON,
    animation = AnimationParse(animation_data),
  }
*/
function PlayerParse(pd)
{
  var pdt = JSON.parse(pd);
  pdt.animation = JSON.parse(pdt.animation_data);

  return pdt;
}

/*
  JSON
  {
    path_skelet : source+"_ske.json",
    path_atlas  : source+"_tex.json",
    path_texture: source+"_tex.png",
    skelet : sk,
    armature : arm,
    drgname : drg
  }
*/
function AnimationParse(pd)
{
  let f = JSON.parse(pd);
  let temp = BaseInit();
  temp.panim = f.anim;
  temp.arname = f.armature;
  temp.dgname = f.drgname;
  temp.sk_data = f.path_skelet;
  temp.tp_data = f.path_atlas;
  temp.tj_data = f.path_texture;

  return temp;
}