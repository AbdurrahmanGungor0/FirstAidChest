using FirstAidChest.Data.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstAidChest.Data.Medicines
{
    public class MedicineDb : SqlDatabase
    {
        public Medicine GetMedicine(string Barcode)
        {
            DataTable dtMedicine = null;
            if (this.TestConnection())
            {
                dtMedicine = new DataTable();
                string sql = String.Format("SELECT * FROM Medicines WHERE Barcode = '{0}'", Barcode);
                dtMedicine = this.GetDataTable(sql);
            }

            if (dtMedicine != null)
                return new Medicine()
                {
                    Barcode = dtMedicine.Rows[0]["Barcode"].ToString(),
                    Code = dtMedicine.Rows[0]["Code"].ToString(),
                    Company = dtMedicine.Rows[0]["Company"].ToString(),
                    Id = Guid.Parse(dtMedicine.Rows[0]["Id"].ToString()),
                    Name = dtMedicine.Rows[0]["Name"].ToString()
                };
            else
                return null;
        }
    }
}
