namespace Advensco.Base.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_logger_Models : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ApiLogs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Method = c.String(),
                        URL = c.String(),
                        Request = c.String(),
                        Response = c.String(),
                        Status = c.String(),
                        StatusCode = c.Int(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CustomLogs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CreatedOn = c.DateTime(nullable: false),
                        Method = c.String(),
                        Message = c.String(),
                        ExceptionMessage = c.String(),
                        IsException = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CustomLogs");
            DropTable("dbo.ApiLogs");
        }
    }
}
