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
        [Route("api/company/create")]
        public Company Create([FromBody] Company company)
        {
            Console.WriteLine("CompanyController_Create: " + company);
            return _objcompany.AddCompany(company);
        }
        
        [HttpGet]
        [Route("api/company/")]
        public  IEnumerable<Company> Index()
        {
            return  _objcompany.GetAllCompanies();
        }
        
        [HttpGet]
        [Route("api/company/{id}")]
        public Company GetCompany(int id)
        {
            return _objcompany.GetCompanyData(id);
        }

        [HttpPut]
        [Route("api/company/{id}")]
        public Company GetCompany([FromBody] Company company)
        {
            return _objcompany.UpdateCompanyData(company);
        }
        
        [HttpDelete]
        [Route("api/company/{id}")]
        public int DeleteCompany(int id)
        {
            return _objcompany.DeleteCompanyData(id);
        }
        
        
        
        
        


        
    }
}