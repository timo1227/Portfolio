"use client"
import React from "react";
import useSWR from "swr";
import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow } from "@coreui/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Repo() {
    const { data, error } = useSWR("/api/getRepo", fetcher);

    if (error) return <div className="font-bold">Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data);
    return (
        <div className="flex flex-wrap justify-around min-w-fit py-20">
            <h2 className="font-Burtons text-4xl text-center w-full mt-7">My Projects</h2>
            <ul className="flex flex-wrap justify-center px-20 gap-10">
                {
                    data.map((repo: any) => {
                        if (repo.name === "timo1227" || repo.name === "data-mining") {
                            return null;
                        }
                        return (
                            <li key={repo.id}>
                                <CCard className="my-10 max-w-sm min-d">
                                    <CCardHeader>
                                        <h3 className="font-Burtons text-center">{repo.name}</h3>
                                    </CCardHeader>
                                    <CCardBody>
                                        <CRow>
                                            <CCol className="text-center">
                                                <p>{repo.description}</p>
                                            </CCol>
                                        </CRow>
                                        <CRow className="absolute bottom-0 m-0flex justify-center w-full py-2 pr-3">
                                            <CButton
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                color="primary"
                                                className="bg-indigo-600 w-auto  hover:bg-orange-400 hover:text-black"
                                            >
                                                Visit Repo
                                            </CButton>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
