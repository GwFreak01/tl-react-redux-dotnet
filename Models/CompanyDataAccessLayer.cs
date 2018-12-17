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
        react_tlContext db = new react_tlContext();

        //Get All Company Records
        public IEnumerable<Company> GetAllCompanies()
        {
            try
            {
                return db.Company.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        //Create new company record

        public int AddCompany(Company company)
        {
            try
            {
                Console.WriteLine("CompanyDAL_ADD_COMPANY: " + company.Zipcode);
                db.Company.Add(company);
                db.SaveChanges();
                return 1;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        
    }
}