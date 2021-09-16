const Discount = require('../modals/discount');

// @desc      Get Discount.
// @route     GET /api/v1/Discount.
// @access    Public
exports.getDiscount = async (req, res, next) => {
    try {
      const discount = await Discount.findOne();
      console.log(discount);
      res.status(200).json({ success: true, data: discount});
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };

  // @desc      Create Discount
// @route     Post /api/v1/Discount
// @access    Public
exports.createDiscount = async (req, res, next) => {
    try {
      const discount = await Discount.create(req.body);
  
      res.status(201).json({
        success: true,
        dbid: discount._id
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err.message });
    }
  };