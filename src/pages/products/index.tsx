import {
  DashboardDescription,
  DashboardHeader,
  DashboardLayout,
  DashboardTitle,
} from "@/components/layouts/DashboardLayout";
import { ProductCatalogCard } from "@/components/shared/product/ProductCatalogCard";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/mock";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const ProductsPage: NextPageWithLayout = () => {
  return (
    <>
      <DashboardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <DashboardTitle>Product Management</DashboardTitle>
            <DashboardDescription>
              View, add, edit, and delete products in your inventory.
            </DashboardDescription>
          </div>

          <Button>Add New Product</Button>
        </div>
      </DashboardHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCatalogCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image ?? ""}
            category={product.category}
            onEdit={() => void 0}
            onDelete={() => void 0}
          />
        ))}
      </div>
    </>
  );
};

ProductsPage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProductsPage;
