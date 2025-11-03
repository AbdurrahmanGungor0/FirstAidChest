using FirstAidChest.Data;
using FirstAidChest.Data.Base;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FirstAidChest
{
    /// <summary>
    /// Summary description for Service
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Service : System.Web.Services.WebService
    {

        [WebMethod]
        public Medicine GetMedicine(String Barcode)
        {
            SqlDatabase sqlDatabase = new SqlDatabase();
            DataTable dtMedicine = null;
            if (sqlDatabase.TestConnection())
            {
                dtMedicine = new DataTable();
                string sql = String.Format("SELECT * FROM Medicines WHERE Barcode = '{0}'", Barcode);
                dtMedicine = sqlDatabase.GetDataTable(sql);
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

        [WebMethod]
        public List<Medicine> GetAllMedicines()
        {
            return null;
        }

        [WebMethod]
        public List<Medicine> RefreshMedicines(String DeviceId)
        {
            return null;
        }

        [WebMethod]
        public bool UpdateMedicine(Medicine oMedicine)
        {
            return false;
        }

        [WebMethod]
        public bool DeleteMedicine(String DeviceId, String Barcode)
        {
            return false;
        }

        [WebMethod]
        public List<Medicine> GetInventoryMedicines(String DeviceId)
        {
            return null;
        }

        [WebMethod]
        public List<Medicine> SearchMedicine(string sText)
        {
            return null;
        }
    }
}
