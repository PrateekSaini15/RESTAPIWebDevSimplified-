const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// Getting all records
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Getting only one record
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber);
});

// Creating one record
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.subscriber.name,
    subscribedToChannel: req.body.subscriber.subscribedToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating one record
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one record
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    const removedSubscriber = res.subscriber;
    await res.subscriber.remove();
    res.json(removedSubscriber);
  } catch (error) {
    res.statu(500).json({ message: error.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      res.status(404).json({ message: "Subscriber not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
