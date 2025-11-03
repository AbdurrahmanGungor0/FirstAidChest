using FirstAidChest.Data.Medicines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstAidChest.Business.Medicines
{
    public static class Medicine
    {
        public static List<FirstAidChest.Data.Medicine> GetMedicines()
        {
            return null;

        }
        public static FirstAidChest.Data.Medicine GetMedicine(string Barcode)
        {
            return new MedicineDb().GetMedicine(Barcode);
        }
    }
}
