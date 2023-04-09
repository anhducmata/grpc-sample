using Microsoft.EntityFrameworkCore;
using ProductGrpcService.Database;
using ProductGrpcService.Domain.Models;

namespace ProductGrpcService.Services;

public class ProductService : IProductService
{
    private readonly AppDbContext _context;

    public ProductService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Product>> ListAsync()
    {
        return await _context.Products.AsNoTracking().ToListAsync();
    }

    public async Task CreateAsync(Product product)
    {
        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();
    }
}