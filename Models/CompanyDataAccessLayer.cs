using Microsoft.EntityFrameworkCore;  
using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;
using tl_react_redux_dotnet.Models;

namespace tl
{
    public class CompanyDataAccessLayer
    {
        private readonly react_tlContext _db = new react_tlContext();

        //Create new company record

        public Company AddCompany(Company company)
        {
            try
            {
                Console.WriteLine("CompanyDAL_ADD_COMPANY: " + company.Zipcode);
                _db.Company.Add(company);
                _db.SaveChanges();
                return company;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        //Get All Company Records
        public IEnumerable<Company> GetAllCompanies()
        {
            try
            {
                return _db.Company.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        //Get Company Record
        public Company GetCompanyData(int id)
        {
            try
            {
                Company company = _db.Company.Find(id);
                return company;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        
        
        
        
    }
}