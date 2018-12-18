using System;  
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using tl;
using tl_react_redux_dotnet.Models;

namespace tl_react_redux_dotnet.Controllers
{
   
    public class CompanyController : Controller
    {
        private readonly CompanyDataAccessLayer _objcompany = new CompanyDataAccessLayer();

        [HttpGet]
        [Route("api/Company/Index")]
        public  IEnumerable<Company> Index()
        {
            return  _objcompany.GetAllCompanies();
        }
        
        [HttpGet]
        [Route("api/Company/{id}")]
        public Company GetCompany(int id)
        {
            return _objcompany.GetCompanyData(id);
        }


        [HttpPost]
        [Route("api/Company/Create")]
        public int Create([FromBody] Company company)
        {
            Console.WriteLine("CompanyController_Create: " + company);
            return _objcompany.AddCompany(company);
        }
    }
}