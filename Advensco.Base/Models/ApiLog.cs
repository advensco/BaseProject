//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Advensco.Base.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ApiLog
    {
        public int Id { get; set; }
        public string Method { get; set; }
        public string URL { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public string Status { get; set; }
        public int StatusCode { get; set; }
        public System.DateTime CreatedOn { get; set; }
    }
}
