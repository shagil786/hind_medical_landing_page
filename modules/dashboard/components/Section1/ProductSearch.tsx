import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useProduct } from "@/provider/ProductProvider";

const ProductSearch = () => {
  const { products, searchValue, handleSearch } = useProduct();
  return (
    <Command className="rounded-lg border shadow shadow-gray-400/50">
      <CommandInput
        placeholder="Type the product name to search..."
        value={searchValue}
        onValueChange={handleSearch}
        autoFocus
        results={products.length}
        security="high"
        spellCheck
        translate="yes"
        unselectable="on"
        vocab="http://schema.org/"
      />
      {searchValue?.length > 0 ? (
        <CommandList>
          {products.map((product) => (
            <CommandItem key={product.id}>{product.name}</CommandItem>
          ))}
        </CommandList>
      ) : (
        <CommandList>
          <CommandEmpty>Start typing to search...</CommandEmpty>
        </CommandList>
      )}
    </Command>
  );
};

export default ProductSearch;
