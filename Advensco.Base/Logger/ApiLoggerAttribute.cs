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
    public class ApiLoggerAttribute : ActionFilterAttribute
    {
        private string requestBody; 
        //public async override void OnActionExecuting(HttpActionContext actionContext)
        //{
        //    // Debug.WriteLine($" OnActionExecuting(HttpActionContext actionContext) Started : {DateTime.Now}");
        //    this.requestBody = await actionContext.Request.Content.ReadAsStringAsync();
        //    ////Trace.WriteLine(requestBody);
        //    //// let other handlers process the request
        //    //var result = await actionContext.Response.Content.ReadAsStringAsync();

        //    //Logger.LogApi(new ApiLog
        //    //{
        //    //    URL = actionContext.Request.RequestUri.LocalPath,
        //    //    Method = actionContext.Request.Method.ToString(),
        //    //    CreatedOn = DateTime.Now,
        //    //    Request = requestBody,
        //    //    Response = (actionContext.Response.Content != null) ? await actionContext.Response.Content.ReadAsStringAsync() : "No Response",
        //    //    Status = (actionContext.Response.StatusCode == HttpStatusCode.OK) ? "SUCCESS" : "FAIL",
        //    //    StatusCode = (int)actionContext.Response.StatusCode,
        //    //});
        //}


        public async  override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
           // Debug.WriteLine($" OnActionExecuted(HttpActionContext actionContext) Started : {DateTime.Now}");

             string requestBody =  await actionExecutedContext.Request.Content.ReadAsStringAsync();
            //Trace.WriteLine(requestBody);
            // let other handlers process the request
            var result =await actionExecutedContext.Response.Content.ReadAsStringAsync();

            using (Logger Logger = new Logger())
            {
                Logger.LogApi(new Advensco.Base.Models.ApiLog
                {
                    URL = actionExecutedContext.Request.RequestUri.LocalPath,
                    Method = actionExecutedContext.Request.Method.ToString(),
                    CreatedOn = DateTime.Now,
                    Request = requestBody,
                    Response = (result != null) ? result : "No Response",
                    Status = (actionExecutedContext.Response.StatusCode == HttpStatusCode.OK) ? "SUCCESS" : "FAIL",
                    StatusCode = (int)actionExecutedContext.Response.StatusCode,
                }); 
            }
        }



    }
}