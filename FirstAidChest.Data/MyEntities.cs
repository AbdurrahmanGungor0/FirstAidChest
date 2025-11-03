namespace FirstAidChest.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class MyEntities : DbContext
    {
        public MyEntities()
            : base("name=FirstAidChest")
        {
        }

        public virtual DbSet<Medicine> Medicines { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
