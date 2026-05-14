using Microsoft.EntityFrameworkCore;
using Mvc.Models;

namespace Mvc.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options):base(options)
        {
        }
        public DbSet<Category>Categories { get; set; }
        public DbSet<Slider>Sliders { get; set; }
        public DbSet<Product>Products  { get; set; }
    }
}
