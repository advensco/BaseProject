using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Advensco.Base.Logger
{
    public class OverrideApiLoggerAttribute : ActionFilterAttribute, IOverrideFilter
    {
        public Type FiltersToOverride
        {
            get
            {
                return typeof(ApiLoggerAttribute);
            }
        }

        public   override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {

        }
    }
}