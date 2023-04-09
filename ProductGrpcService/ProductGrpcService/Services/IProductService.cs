using ProductGrpcService.Domain.Models;

namespace ProductGrpcService.Services;

public interface IProductService
{
    Task<IEnumerable<Product>> ListAsync();

    Task CreateAsync(Product product);
}