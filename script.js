 function updateStats(){
            let allCards = document.querySelectorAll(".card-list .card");
            let interviewCount = 0;
            let rejectedCount = 0;

            allCards.forEach(function(card){
                let badge = card.querySelector(".status-badge");
                if(badge.classList.contains("badge-interview")) interviewCount++;
                if(badge.classList.contains("badge-reject")) rejectedCount++;
            });

        let totalCount = allCards.length;
        document.querySelector(".stat-value.total").textContent = totalCount;
        document.querySelector(".stat-value.interview").textContent = interviewCount;
        document.querySelector(".stat-value.rejected").textContent = rejectedCount;

        document.querySelector("tab-count.count-all").textContent = totalCount;
         document.querySelector("tab-count.count-interview").textContent = interviewCount;
          document.querySelector("tab-count.count-rejected").textContent = rejectedCount;

          let activeFilter = document.querySelector(".filter-btn.active").dataset.fitter;
          if(activeFilter === "all") document.querySelector("jobs-count").textContent = totalCount + "jobs";
          if(activeFilter === "interview") document.querySelector("jobs-count").textContent = interviewCount + "jobs";
          if(activeFilter === "rejected") document.querySelector("jobs-count").textContent = rejectedCount + "jobs";
        }
        function applyFilter(filter){
            let allCards = document.querySelectorAll(".card-list .card");
            allCards.forEach(function(card){
                let badge = card.querySelector(".status-badge");
                if(filter === "all")
            {
                card.style.display = "block";
            }
            else if(filter === "interview")
            {
                card.style.display = badge.classList.contains("badge-interview") ? "block" : "none";
            }
            else if(filter === "rejected")
            {
                card.style.display = badge.classList.contains("badge-rejected") ? "block" : "none";
            }
            });
        }
        function handleStatusButtons(){
            let allCards = document.querySelectorAll(".card-list .card");
            allCards.forEach(function(card){
                let btnInterview = card.querySelector(".btn-interview");
                let btnRejected = card.querySelector(".btn-rejected");
                let badge = card.querySelector(".status-badge");

                btnInterview.addEventListener("click",function()
            {
                if(badge.classList.contains("badge-interview"))
            {
                badge.textContent = "NOT APPLIED";
                badge.className  = "status-badge";
            }else
            {
                badge.textContent = "INTERVIEW";
                badge.className = "status-badge badge-interview";
            }
            updateStats();
            applyFilter(document.querySelector(".filter-btn.active").dataset.filter);
            });
            }
        );
        }
        updateStats();
        handleStatusButtons();
        handleFilterButtons();
