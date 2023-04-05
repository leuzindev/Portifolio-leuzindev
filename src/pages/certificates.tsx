import { CertificateContent } from "@/components/CertificatesContent/CertificateContent";
import { Tela, Container, ContainerCertificates } from "@/styles/kitUI";


import styled from "styled-components";




export default function Certificates(){
    return(
            <ContainerCertificates>
                <h1>Certificados</h1>
                <CertificateContent/>
            </ContainerCertificates>
    )
}