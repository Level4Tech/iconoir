import { IconoirProvider } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { Ad } from './Ad';
import { CustomizationEditor } from './CustomizationEditor';
import { FiltersEditor } from './FiltersEditor';
import { Icon, IconList, IconListFilters } from './IconList';
import { media } from '../lib/responsive';
import { useCustomizationPersistence } from './useCustomizationPersistence';

export interface ExploreProps {
  allIcons: Icon[];
}
export function Explore({ allIcons }: ExploreProps) {
  const [filters, setFilters] = React.useState<IconListFilters>({});
  const [customizations, setCustomizations] = useCustomizationPersistence();
  return (
    <Container>
      <Left>
        <FilterContainer isMobile>
          <FiltersEditor filters={filters} onChange={setFilters} />
        </FilterContainer>
        <IconoirProvider
          iconProps={{
            color: customizations.hexColor,
            width: customizations.size ? `${customizations.size}px` : undefined,
            height: customizations.size
              ? `${customizations.size}px`
              : undefined,
            strokeWidth: customizations.strokeWidth,
          }}
        >
          <IconList filters={filters} allIcons={allIcons} />
        </IconoirProvider>
      </Left>
      <Right>
        <FilterContainer>
          <FiltersEditor filters={filters} onChange={setFilters} />
        </FilterContainer>
        <CustomizationEditor
          customizations={customizations}
          onChange={setCustomizations}
        />
        <Ad />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
  min-height: calc(100vh - 100px);
`;
const Right = styled.div`
  position: sticky;
  top: 50px;
  width: 275px;
  margin-left: 68px;
  display: none;
  ${media.md} {
    display: block;
  }
`;
const FilterContainer = styled.div<{ isMobile?: boolean }>`
  display: ${(props) => (props.isMobile ? 'block' : 'none')};
  margin-bottom: 40px;
  position: sticky;
  top: 20px;
  z-index: 100;
  ${media.md} {
    position: relative;
    top: 0;
    display: ${(props) => (props.isMobile ? 'none' : 'block')};
    margin-bottom: 50px;
  }
`;
