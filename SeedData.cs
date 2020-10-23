using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using unipage.Models;

namespace unipage {

    public static class SeedData {

        public static void EnsurePopulated(IApplicationBuilder app) {
            ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();
            if (!context.UserModels.Any()) {
                context.UserModels.AddRange(
                    new UserModel {
                        Name="Kayti", Age=20},
                    new UserModel {
                        Name = "Lifejacket", 
                        Age= 21 },
                    new UserModel {
                        Name = "Soccer",
                        Age= 23 },
                    new UserModel {
                        Name = "Corner",
                        Age=24},
                    new UserModel {
                        Name = "Bling King", 
                        Age = 25
                    }
                );
                context.SaveChanges();
            }
        }
    }
}