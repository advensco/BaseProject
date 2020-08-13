using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Advensco.Base.Models;

namespace Advensco.Base.Controllers
{
    [RoutePrefix("apk")]
    public class ApiLogsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: ApiLogs
        [Route("test")]
        public ActionResult Index()
        {
            return View(db.ApiLogs.ToList());
        }

        // GET: ApiLogs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApiLog apiLog = db.ApiLogs.Find(id);
            if (apiLog == null)
            {
                return HttpNotFound();
            }
            return View(apiLog);
        }

        // GET: ApiLogs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ApiLogs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Method,URL,Request,Response,Status,StatusCode,CreatedOn")] ApiLog apiLog)
        {
            if (ModelState.IsValid)
            {
                db.ApiLogs.Add(apiLog);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(apiLog);
        }

        // GET: ApiLogs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApiLog apiLog = db.ApiLogs.Find(id);
            if (apiLog == null)
            {
                return HttpNotFound();
            }
            return View(apiLog);
        }

        // POST: ApiLogs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Method,URL,Request,Response,Status,StatusCode,CreatedOn")] ApiLog apiLog)
        {
            if (ModelState.IsValid)
            {
                db.Entry(apiLog).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(apiLog);
        }

        // GET: ApiLogs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApiLog apiLog = db.ApiLogs.Find(id);
            if (apiLog == null)
            {
                return HttpNotFound();
            }
            return View(apiLog);
        }

        // POST: ApiLogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ApiLog apiLog = db.ApiLogs.Find(id);
            db.ApiLogs.Remove(apiLog);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
