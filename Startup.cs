namespace unipage
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.DependencyInjection;
    using React.AspNet;
    using System;
    using System.IO;
    using unipage.Models;
    using Microsoft.EntityFrameworkCore;
    public class Startup
    {

        // Changed the method from void to return IServiceProvider,
        // otherwise we get a nasty InvalidOperationException: 
        // Cannot resolve scoped service 
        // 'React.AspNet.HttpContextLifetimeProvider+PerRequestRegistrations' 
        // from root provider.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(opts=>{
                opts.UseSqlite("Data Source=unipage.db");
            });
            

            // existing services below:
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMvc();
            services.AddControllersWithViews();
            services.AddRazorPages();
            return services.BuildServiceProvider();
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();

            app.UseRouting();
            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                //endpoints.MapHub<ChatHub>("/chat");
                endpoints.MapRazorPages();
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });
            SeedData.EnsurePopulated(app);
        }
    }
}