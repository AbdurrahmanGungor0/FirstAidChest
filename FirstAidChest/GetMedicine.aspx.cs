using FirstAidChest.Business.Medicines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FirstAidChest
{
    public partial class GetMedicine : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnGetMedicine_Click(object sender, EventArgs e)
        {
            FirstAidChest.Data.Medicine medicine = Medicine.GetMedicine(tbxBarcode.Text);
        }
    }
}