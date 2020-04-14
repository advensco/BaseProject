using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.ExceptionHandling;
using Advensco.Base.Models;

namespace Advensco.Base.Logger
{
    public  class Logger : IDisposable
    {
        private ApplicationDbContext ctx = new ApplicationDbContext();

        public Logger()
        {
            ctx = new ApplicationDbContext();
        }

        public   void Log(string message, string method = null)
        {
            ctx.CustomLogs.Add(new CustomLog()
            {
                CreatedOn = DateTime.Now,
                Method = method,
                Message = message,
                IsException = false
            });
          //  ctx.SaveChanges();
        }
        public   void LogException(Exception exception, string message = null, string method = null)
        {
            ctx.CustomLogs.Add(new CustomLog()
            {
                CreatedOn = DateTime.Now,
                Method = method,
                Message = message,
                IsException = true,
                ExceptionMessage = $"{exception.Message} (inner) {exception.InnerException?.Message}",

            });
           // ctx.SaveChanges();
        }

        public   void LogApi(ApiLog apiApiLog)
        {
            ctx.ApiLogs.Add(apiApiLog);
          //  ctx.SaveChanges();
        }

        public void Dispose()
        {
            ctx.SaveChanges();
           
            //this.Dispose();
        }
    }
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public void Handle(ExceptionHandlerContext context)
        {
            var exception = context.Exception;

            var httpException = exception as HttpException;

            if (httpException != null)
            {
                context.Result = new CustomErrorResult(context.Request,
                    (HttpStatusCode)httpException.GetHttpCode(),
                    httpException.Message);
                return;
            }

            // log exception 
            using (Logger Logger = new Logger())
            {
                Logger.LogException(exception, "Unhandled Exception.", "Global Habdler.");
                // log Request.  
                Logger.LogApi(new ApiLog
                {
                    URL = context.Request.RequestUri.LocalPath,
                    Method = context.Request.Method.ToString(),
                    CreatedOn = DateTime.Now,
                    Status = "fail",
                    StatusCode = 500,
                    Request = context.Request.Content.ReadAsStringAsync().Result,
                    //Response = context.Result.ExecuteAsync().Result
                }); 
            }

            // Return HttpStatusCode for other types of exception.
            context.Result = new CustomErrorResult(context.Request,
                HttpStatusCode.InternalServerError,
                exception.Message);

        }

        public Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
        {
            var exception = context.Exception;

            var httpException = exception as HttpException;

            if (httpException != null)
            {


                context.Result = new CustomErrorResult(context.Request,
                    (HttpStatusCode)httpException.GetHttpCode(),
                    httpException.Message);
                return Task.FromResult(0);
            }


            context.Result = new CustomErrorResult(context.Request,
                            HttpStatusCode.InternalServerError,
                            exception.Message);

            // log exception 
            using (Logger Logger = new Logger ())
            {
                Logger.LogException(exception, "Unhandled Exception.", "Global Habdler."); 
            }
            // log Request.  

            //Logger.LogApi(new ApiLog
            //{
            //    URL = context.Request.RequestUri.LocalPath,
            //    Method = context.Request.Method.ToString(),
            //    CreatedOn = DateTime.Now,
            //    Status = "fail",
            //    StatusCode = 500,
            //    Request = context.Request.Content.ReadAsStringAsync().Result,
            //    Response = context.Result.ExecuteAsync(cancellationToken).Result.ToString()
            //});

            // Return HttpStatusCode for other types of exception.

            return Task.FromResult(0);

        }
    }
}