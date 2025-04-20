import { setPageOffset, type PokemonStateType } from "@/store/pokemonslice";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useDispatch } from "react-redux";

export default function Paging({
  pagingInfo,
}: {
  pagingInfo: PokemonStateType;
}) {
  const dispatch = useDispatch();
  const totalPages = Math.ceil((pagingInfo?.pokemonList?.count || 0) / 10);
  const offset = pagingInfo?.offset;
  const limit = pagingInfo?.limit;

  const handlePageChange = (newOffset: number) => {
    dispatch(setPageOffset(newOffset));
  };
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="/pokemon-list"
              onClick={() => handlePageChange(offset - limit)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="bg-amber-800 text-white font-extrabold"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="/pokemon-list"
              onClick={() => handlePageChange(offset + limit)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="flex justify-center mt-8 font-extrabold">
        <span>{totalPages}</span>
      </div>
    </div>
  );
}
