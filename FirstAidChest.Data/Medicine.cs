namespace FirstAidChest.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Medicine
    {
        public Guid Id { get; set; }

        [StringLength(1000)]
        public string Name { get; set; }

        [StringLength(255)]
        public string Barcode { get; set; }

        [StringLength(255)]
        public string Code { get; set; }

        [StringLength(255)]
        public string Company { get; set; }
    }
}
