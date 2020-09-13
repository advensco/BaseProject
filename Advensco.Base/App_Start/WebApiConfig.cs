using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using Advensco.Base.Logger;
using System.Web.Http.ExceptionHandling;
using Advensco.Base.Controllers;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Advensco.Base.Models;

namespace Advensco.Base
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {


            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Employee>("Employees");
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());    


            config.EnableCors();
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add( new BasicAuthenticationAttribute());
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // Register Logger 
            bool EnableApiLogging = Boolean.Parse(ConfigurationManager.AppSettings["EnableApiLogging"] ?? "false");
            if (EnableApiLogging)
                config.MessageHandlers.Add(new LogRequestAndResponseHandler());

            // Register Global Exception Handler     
            config.Services.Replace(typeof(IExceptionHandler),
                new GlobalExceptionHandler());
        }
    }
}
