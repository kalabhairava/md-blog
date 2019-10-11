import styled from '@emotion/styled';
import {Link} from 'gatsby';
import React from 'react';

const StyledHeader = styled.header`
  background: teal;
  margin-bottom: 1.5rem;
`;

interface IProps {
  readonly siteTitle: string;
}

export const Header: React.FC<IProps> = ({siteTitle}) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);
