import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem .5rem 1rem;
  color: #fff;
  font-size: 1.15rem;
`;

export const PaginationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;