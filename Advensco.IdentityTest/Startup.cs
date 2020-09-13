using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Advensco.IdentityTest.Startup))]
namespace Advensco.IdentityTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
