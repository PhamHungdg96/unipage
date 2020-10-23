using Microsoft.EntityFrameworkCore;
namespace unipage.Models {

    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<UserModel> UserModels { get; set; }
    }
}