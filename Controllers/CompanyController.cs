using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using tl;
using tl_react_redux_dotnet.Models;

namespace tl_react_redux_dotnet.Controllers
{
    public class CompanyController : Controller
    {
        CompanyDataAccessLayer objcompany = new CompanyDataAccessLayer();

        [HttpGet]
        [Route("api/Company/Index")]
        public IEnumerable<Company> Index()
        {
            return objcompany.getAllCompanies();
        }
        
        
        
       

    

        // GET api/Companies
//        [HttpGet]
//        public JsonResult Get()
//        {
//            TlDataContext dbContext = new TlDataContext();
//
//            var companies = (from c in dbContext.Company
//                    select new
//                    {
//                        CompanyId = c.CompanyId,
//                        CompanyName = c.CompanyName,
//                        Street1 = c.Street1,
//                        Street2 = c.Street2,
//                        City = c.City,
//                        State = c.State,
//                        Zipcode = c.Zipcode
//                    }
//                );
//            
//            return new JsonResult(companies);
//            
//        }
        
    }
}