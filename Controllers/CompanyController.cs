using System;  
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
        private readonly CompanyDataAccessLayer _objcompany = new CompanyDataAccessLayer();

        [HttpPost]
        [Route("api/Company/Create")]
        public Company Create([FromBody] Company company)
        {
            Console.WriteLine("CompanyController_Create: " + company);
            return _objcompany.AddCompany(company);
        }
        
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

        [HttpPut]
        [Route("api/Company/{id}")]
        public Company GetCompany([FromBody] Company company)
        {
            return _objcompany.UpdateCompanyData(company);
        }
        
        [HttpDelete]
        [Route("api/Company/{id}")]
        public int DeleteCompany(int id)
        {
            return _objcompany.DeleteCompanyData(id);
        }
        
        
        
        
        


        
    }
}