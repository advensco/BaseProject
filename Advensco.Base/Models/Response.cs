using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace Advensco.Base.Models
{
    public class Response<T> : HttpResponseMessage where T : class
    {
        public ResponseStatusEnum Status { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }

    }
    public enum ResponseStatusEnum
    {
        Error = 0,
        Sucess = 1,
        NoData = 2
    }

    public class Response : Response<object>
    {

    }
}