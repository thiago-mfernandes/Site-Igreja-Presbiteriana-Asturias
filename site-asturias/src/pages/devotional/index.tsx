import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import Head from "next/head";
import { DevotionalContainer, DevotionalIntroductionContainer } from "./styles";
import DevotionalCard from "@/components/DevotionalCard";
import { Title } from "@/components/Title";
import { useState } from "react";
import { ContainerReactPaginate } from "@/components/Pagination/styles";
import ReactPaginate from "react-paginate";
import dataDevotionals from "@/data/devotional.json";
import { CaretRight, CaretLeft } from "phosphor-react";
import { Text } from "@/components/Text";

const newestData = dataDevotionals.reverse();

export default function Devotionals() {

  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = newestData.slice(itemOffset, endOffset);  
  const pageCount = Math.ceil(newestData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newestData.length;    
    setItemOffset(newOffset);  
  };

    
  return (
    <>
      <Head>
        <title>Astúrias | Devocionais</title>
      </Head>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <DevotionalContainer>

          <DevotionalIntroductionContainer>
            <Title>
              Acompanhe nossa série
            </Title>
            <Text>
              A cada dia um devocional para fortalecer nosso relacionamento com Deus.
            </Text>
          </DevotionalIntroductionContainer>
          {
            currentItems.map((item) => (
              <DevotionalCard 
                key={item.id}
                id={item.id}
                title={item.title}
              />
            ))
          } 

          <ContainerReactPaginate>
            <ReactPaginate
              breakLabel="..."
              nextLabel={ <CaretRight /> }
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
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

        </DevotionalContainer>
      </motion.div>
    </>
  )
}