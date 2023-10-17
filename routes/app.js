const {Router} = require("express");
const router = Router();

module.exports = router;

const List = [
  {
    item: "Bread",
    price: 500,
  },
  {
    item: "Beans",
    price: 700,
  },
];

router.route("/").get((req, res) => {
  res.json(List);
}).post((req,res) => {
    List.push(req.body)
    res.send("added")
}); 

router.route("/:item").get((req,res) => {
    const {item} = req.params;
    const shopItem = List.find(a => a.item == item)
    res.send(shopItem)
}).patch((req,res) => {
    const {item} = req.params;
    shopItem = List.find(a => a.item === item);
    shopItem.item = req.body.item
    res.send("updated")
});

    router.route("/:item").get((req,res) => {
        const {item} = req.params;
        const shopItem = List.find(a => a.item == item)
        res.send(shopItem)
}).delete((req,res) => {
    List.splice(item, 1);
    return res.send("removed")
});