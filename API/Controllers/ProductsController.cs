using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [Route("api/[controller]")] // https://localhost:5001/api/products
  [ApiController]
  public class ProductsController : ControllerBase
  {
    private readonly StoreContext _context;
    public ProductsController(StoreContext context)
    {
      this._context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      return await _context.Products.ToListAsync();
    }

    [HttpGet("{id}")] // https://localhost:5001/api/products/1
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var product = await _context.Products.FindAsync(id);
      if (product == null)
      {
        return NotFound();
      }
      return Ok(product);
    }
  }
}
