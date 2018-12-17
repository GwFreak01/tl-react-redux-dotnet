using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace tl_react_redux_dotnet.Models
{
    public partial class react_tlContext : DbContext
    {
        public react_tlContext()
        {
        }

        public react_tlContext(DbContextOptions<react_tlContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Company { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:tlautomatics.database.windows.net,1433;Initial Catalog=react_tl;Persist Security Info=False;User ID=tl_admin;Password=Password123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("company");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Street1)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Street2).HasMaxLength(128);
            });
        }
    }
}
