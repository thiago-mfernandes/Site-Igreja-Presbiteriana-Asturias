import { useState } from 'react';
import { Event } from '@/components/Event';
import { Subtitle } from '@/components/Subtitle';
import { ContainerReactPaginate, SectionContainerPagination } from './styles';
import { CaretLeft, CaretRight } from 'phosphor-react';

import ReactPaginate from 'react-paginate';
import data from "@/data/events.json";


//usado na pagina Schedule
export function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = data.slice(itemOffset, endOffset);
  //console.log(currentItems);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    //console.log(
      //`User requested page number ${event.selected}, which is offset ${newOffset}`
    //);
    setItemOffset(newOffset);  
  };

  return (
    <SectionContainerPagination>
      <Subtitle>Próximos Eventos</Subtitle>
      {
        currentItems.map((event) => (
          <Event 
            key={event.id}
            address={event.address} 
            date={event.date} 
            description={event.description} 
            id={event.id} 
            title={event.title} 
            time={event.time} 
          />
          ))
        }
      <ContainerReactPaginate>
        <ReactPaginate
          breakLabel="..."
          nextLabel={ <CaretRight /> }
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel={ <CaretLeft /> }
          renderOnZeroPageCount={null}
          containerClassName={"paginationsButtons"}
          previousClassName={"previousButton"}
          nextClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </ContainerReactPaginate>
    </SectionContainerPagination>
  );
}



